'use client';

import { ReactNode, useRef } from 'react';
import { AppStore, store } from '@/lib/store';
import { Provider } from 'react-redux';

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
