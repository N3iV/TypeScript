import fs from "fs";
import path from "path";
const booksDir = path.join(process.cwd(), "books"); // cwd luon tra ve thu muc hien hanh

export const getBooks = () => {
  const bookFileNames = fs.readdirSync(booksDir);
  const booksData = bookFileNames.map((bookFileName) => {
    const bookPath = path.join(booksDir, bookFileName);
    const bookContent = fs.readFileSync(bookPath, "utf8");
    console.log(bookContent);
    return {
      bookName: bookFileName.replace(/\.txt$/, ""),
      bookContent,
    };
  });
  return booksData;
};
