import path from "node:path";
import fs from "node:fs";

// 文件根目录
const DIR_PATH = path.resolve();
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST: string[] = [
  "index.md",
  ".vitepress",
  "node_modules",
  ".idea",
  "assets",
];

// 判断是否是文件夹
const isDirectory = (path: string): boolean => fs.lstatSync(path).isDirectory();

// 取差值
const intersections = (arr1: string[], arr2: string[]): string[] =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

// 定义接口来类型化 getList 返回的数据
interface ListItem {
  text: string;
  collapsible?: boolean;
  items?: ListItem[];
  link?: string;
}

// 把方法导出直接使用
function getList(params: string[], path1: string, pathname: string): ListItem[] {
  // 存放结果
  const res: ListItem[] = [];
  // 开始遍历 params
  for (let file of params) {
    // 拼接目录
    const dir = path.join(path1, file);
    // 判断是否是文件夹
    const isDir = isDirectory(dir);
    if (isDir) {
      // 如果是文件夹,读取之后作为下一次递归参数
      const files = fs.readdirSync(dir);
      res.push({
        text: file,
        collapsible: true,
        items: getList(files, dir, `${pathname}/${file}`),
      });
    } else {
      // 获取名字
      const name = path.basename(file);
      // 排除非 md 文件
      const suffix = path.extname(file);
      if (suffix !== ".md") {
        continue;
      }
      res.push({
        text: name,
        link: `${pathname}/${name}`,
      });
    }
  }
  // 对 name 做一下处理，把后缀删除
  res.map((item) => {
    item.text = item.text.replace(/\.md$/, "");
  });
  return res;
}

export const set_sidebar = (pathname: string): ListItem[] => {
  // 获取 pathname 的路径
  const dirPath = path.join(DIR_PATH, pathname);
  // 读取 pathname 下的所有文件或者文件夹
  const files = fs.readdirSync(dirPath);
  // 过滤掉
  const items = intersections(files, WHITE_LIST);
  // getList 函数后面会讲到
  return getList(items, dirPath, pathname);
};
