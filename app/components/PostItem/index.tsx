import React, {FC} from 'react';
import {Post} from '../../api/types';
import {StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {ImageLoader} from '../ImageLoader';
import {postImageUriGenerator} from '../../utils/postImageUriGenerator';
import {Spacer} from '../Spacer';
import {ActionIcon} from '../ActionIcon';
import {useFetchUserName} from '../../hooks/useFetchUserName';

interface PostItemProps {
  post: Post;
}

const PostItem: FC<PostItemProps> = ({post}) => {
  const postImageUri = postImageUriGenerator(post?.id, 200);
  const {userName} = useFetchUserName(post?.userId);

  return (
    <View style={styles.containerStyle}>
      <Text category="h6">{userName}</Text>
      <Text category="s1">{post.title}</Text>
      <Text category="s2">{post.body}</Text>
      <ImageLoader size={200} uri={postImageUri} />
      <Spacer line size={10} />
      <View style={styles.reactionsContainer}>
        <View style={styles?.iconsContainer}>
          <ActionIcon
            fill="#598BFF"
            name="arrow-up-outline"
            style={styles?.likeIconStyle}
          />
          <Text status="info" category="p1">
            Likes: {post.reactions.likes}
          </Text>
        </View>
        <View style={styles?.iconsContainer}>
          <ActionIcon
            fill="#FF3D71"
            name="arrow-down-outline"
            style={styles?.likeIconStyle}
          />
          <Text status="danger" category="p1">
            Dislikes: {post.reactions.dislikes}
          </Text>
        </View>
        <View style={styles?.iconsContainer}>
          <ActionIcon
            fill="#FFC94D"
            name="eye-outline"
            style={styles?.likeIconStyle}
          />
          <Text status="warning" category="p1">
            Views: {post.views}
          </Text>
        </View>
      </View>
      <Text appearance="hint">Tags: #{post.tags.join(' #')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  likeIconStyle: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    color: '#3366FF',
  },
  contentStyle: {
    marginVertical: 8,
    fontSize: 16,
    color: '#555',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  reactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});

export default PostItem;
