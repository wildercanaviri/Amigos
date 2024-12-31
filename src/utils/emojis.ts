export const funEmojis = [
  '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', 
  '😉', '😊', '😋', '😎',
  '🙂', '🤗', '🤩', '🤔', '🤨', '😐', 
  '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', 
  '😯', '😪', '😫', '🥱', '😴', '😌', '😛', '😜', 
  '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', 
  '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', 
  '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', 
  '😱', '🥵', '🥶', '😳', '🤪', '😵', '😡', '😠',
  '🤬', '😷', '🤒', '🤕', '🤧', '😇',
  '🥳', '🥺', '🤠', '🤡', '🤥', '🤫', '🤭', '🧐',
  '🤓', '😈', '👿', '👹', '👺', '👻',
  '🤖', '😺', '😸', '😹', '😼', 
  '🙀', '😿', '😾'
];
export function getRandomEmoji(): string {
  return funEmojis[Math.floor(Math.random() * funEmojis.length)];
}