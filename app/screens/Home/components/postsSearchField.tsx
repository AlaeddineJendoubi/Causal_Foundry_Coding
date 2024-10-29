import React, {FC, useState} from 'react';
import {SearchInput} from '../../../components/SearchInput';
import {StyleSheet, View} from 'react-native';

export const PostsSearchField: FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <View style={styles?.searchContainer}>
      <SearchInput
        placeholder="Search for posts"
        searchText={searchText}
        onChangeText={text => setSearchText(text)}
        clearText={() => setSearchText('')}
        isEmptyField={searchText?.length <= Number(1)}
        value={searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 20,
  },
});
