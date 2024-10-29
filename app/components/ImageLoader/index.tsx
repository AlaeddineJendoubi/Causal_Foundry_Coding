import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';

interface ImageLoaderProps {
  uri: string;
  size: number;
}

export const ImageLoader: FC<ImageLoaderProps> = ({uri, size}) => {
  return (
    <Image
      style={styles(size).imageStyle}
      source={{
        uri,
      }}
    />
  );
};

const styles = (size: number) =>
  StyleSheet.create({
    imageStyle: {
      width: size,
      height: size,
      alignSelf: 'center',
      margin: 10,
    },
  });
