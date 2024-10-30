import {postImageUriGenerator} from '../postImageUriGenerator';

describe('postImageUriGenerator', () => {
  it('should generate correct image URI with default size', () => {
    const uri = postImageUriGenerator(1);
    expect(uri).toBe('https://picsum.photos/seed/1/100/100');
  });

  it('should generate correct image URI with specified size', () => {
    const uri = postImageUriGenerator(2, 200);
    expect(uri).toBe('https://picsum.photos/seed/2/200/200');
  });

  it('should generate URI with default postID when postID is 0', () => {
    const uri = postImageUriGenerator(0);
    expect(uri).toBe('https://picsum.photos/seed/1/100/100');
  });

  it('should generate URI with default postID when postID is not provided', () => {
    const uri = postImageUriGenerator(undefined as any);
    expect(uri).toBe('https://picsum.photos/seed/1/100/100');
  });
});
