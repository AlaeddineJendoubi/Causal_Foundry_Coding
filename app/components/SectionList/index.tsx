import React, {FC} from 'react';
import {Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import {Spacer} from '../Spacer';

interface SectionListProps {
  left: string;
  right: string;
}
export const SectionList: FC<SectionListProps> = ({left, right}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles?.textContainer}>
          <Text category="label"> {left} :</Text>
        </View>
        <View style={styles?.textContainer}>
          <Text category="label"> {right}</Text>
        </View>
      </View>
      <Spacer line size={5} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  textContainer: {
    flex: 2,
  },
});
