// 作者字符串里的标记 → HTML 渲染（共同一作 / 共同通讯作者）。
//   **名字**  → 加粗（你自己）
//   名字*     → 共同第一作者：名字右上角标 *  (equal contribution)
//   名字+     → 共同通讯作者：名字右上角标 †  (corresponding author，剑号/十字)
// 例：'**Jiaqi Bai**+, Jindou Jia*, Wei Li*, ..., Jianfei Yang+'
// 处理顺序：先把 **..** 转成粗体，再把剩下的 + / * 转成上标，避免与 ** 冲突。
export function formatAuthors(authors: string): string {
  return authors
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\+/g, '<sup class="aff">†</sup>') // + → † 共同通讯作者
    .replace(/\*/g, '<sup class="aff">*</sup>'); // * → * 共同第一作者
}

// 列表里是否出现过共同一作 / 共同通讯标记（用于决定是否显示图例）。
export function hasAuthorMarks(list: { authors: string }[]): boolean {
  return list.some((p) => /[*+]/.test(p.authors.replace(/\*\*/g, '')));
}
