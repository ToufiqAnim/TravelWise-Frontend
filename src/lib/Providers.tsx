'use client';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
interface IProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: IProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
