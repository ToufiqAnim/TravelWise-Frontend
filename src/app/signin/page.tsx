'use client';
import { useSignInMutation } from '@/redux/api/authApi';
import { storeUserInfo } from '@/services/auth.services';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const router = useRouter();

  const [signIn, { isSuccess, isError, isLoading }] = useSignInMutation();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    const res = await signIn(data);

    //@ts-ignore
    const accessToken = res?.data?.data?.accessToken;

    if (accessToken) {
      storeUserInfo({ accessToken });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Signed In succesfully', { id: 'success' });
      router.push('/');
    }
    if (isLoading)
      toast.loading('Processing...', { id: 'process', duration: 800 });
    if (isError) toast.error('Failed to sign in', { id: 'err' });
  }, [isSuccess, isError, isLoading, router]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center p-5">Sign In now!</h1>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register('email', { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register('password', { required: true })}
              />
              <label className="label">
                <Link href="/signup" className="label-text-alt link link-hover">
                  Don&apos;t have any account? SignUp
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="py-2 rounded bg-orange-500 text-xl text-white">
                SignIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
