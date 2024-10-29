import React, {FC} from 'react';
import {SearchInput} from '../../../components/SearchInput';
import {StyleSheet, View} from 'react-native';

interface PostsSearchFieldProps {
  handleText: (text: string) => void;
  clearText: () => void;
  textSearch: string;
}

export const PostsSearchField: FC<PostsSearchFieldProps> = ({
  handleText,
  clearText,
  textSearch,
}) => {
  return (
    <View style={styles?.searchContainer}>
      <SearchInput
        placeholder="Search for posts"
        searchText={textSearch}
        onChangeText={handleText}
        clearText={clearText}
        isEmptyField={textSearch?.length <= Number(1)}
        value={textSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 20,
  },
});
