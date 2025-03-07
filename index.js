import { convertToArticles } from "./EnVracLib";

test('convertToArticles', () => {
    const input = [
        {
            json: {
                content: "content",
                description: "description",
                section: "section"
            }
        }
    ];
    const output = [
        {
            content: "content",
            description: "description",
            links: [],
            category: "section"
        }
    ];
    expect(convertToArticles(input)).toEqual(output);
});