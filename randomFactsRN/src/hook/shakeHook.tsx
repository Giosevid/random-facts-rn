import React from 'react';
import {NativeEventEmitter, NativeModules} from 'react-native';

const eventEmitter = new NativeEventEmitter(NativeModules.RNShakeEvent);

const useShake = () => {
  const [shake, setShake] = React.useState<Boolean>(false);

  React.useEffect(() => {
    const subscription = eventEmitter.addListener('ShakeEvent', () =>
      setShake(true),
    );

    return () => subscription.remove();
  }, []);

  return [shake, setShake] as const;
};

export default useShake;
