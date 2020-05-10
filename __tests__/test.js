const judge = require('../fizzbuzz')

describe('judge', () => {
    test('引数が 3 と 5 の倍数でない', () => {
        expect(judge(1)).toBe(1);
    });

    test('引数が 3 の倍数', () => {
        expect(judge(3)).toMatch("fizz");
    });

    test('引数が 5 の倍数', () => {
        expect(judge(5)).toMatch("buzz");
    });

    test('引数が 3 と 5 両方の倍数', () => {
        expect(judge(15)).toMatch("fizzbuzz");
    });

    test('引数が無効境界値 (1 から 100 までの数でない)', () => {
        expect(judge(-1)).toMatch('1 ~ 100までの数値を入力してください（無効境界値）');
        expect(judge(500)).toMatch('1 ~ 100までの数値を入力してください（無効境界値）');
    });

    test('引数が有効境界値 (1 から 100 までの数)', () => {
        expect(judge(1)).toBe(1);
    });

    test('引数が文字列', () => {
        expect(judge('abc')).toMatch('1 ~ 100までの数値を入力してください（数値のみ）');
    });
});