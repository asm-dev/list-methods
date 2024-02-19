//TODO: use this validation for function test!
const EmojiRange = /\uD83D[\uDE00-\uDE4F]/;
const isEmojiInRange = (str) => EmojiRange.test(str);
const getRandomEmoji = () => {
    const rangeMin = 0x1f600;
    const rangeMax = 0x1f64f;
    const unicode = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
    return String.fromCodePoint(unicode);
};
export const emojiRandomList = (number) => {
    let emojiList = [];
    for (let i = 0; i < number; i++) {
        emojiList.push(getRandomEmoji());
    }
    return emojiList;
};
