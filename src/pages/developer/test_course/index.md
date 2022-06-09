---
title: 程序员的测试课

---

# 01|实战：实现一个 ToDo 的应用（上）

这个 ToDo 应用本省非常简单，实现功能并不是我们这两节可的重点。一方面，你会看到如何解决问题的过程，比如：如何分解任务、如何设计测试场景、如何把测试场景转换为一个测试用例等等；另一方面，你也会看到，如何运用这些解决问题的过程一点点把问题解决掉，在整个开发的过程中如何写测试、写代码。

当你在实际工作中面对更复杂的问题时，这里面的代码对你的帮助可能不大，但这些解决问题的思路却会在工作中实际帮助到你。

## 项目前的准备

- 添加 Todo 项

```
todo add <item>

1. <item>
Item <itemIndex> added
```

- 完成 Todo 项

```
todo done <itemIndex>
Item <itemIndex> done.
```

- 查看 Todo 列表，缺省情况下，只列出未完成的 Todo 项。

```
todo list 1. <item1> 2. <item2>
Total: 2 items
```

- 使用 all 参数，查看所有的 Todo 项

```
todo list --all
1. <item1>
2. <item2>
3. [Done] <item3>
Total: 3 items, 1 item done
```


