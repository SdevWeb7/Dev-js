import {PluggableList} from "unified";
import rehypeShiki from "@shikijs/rehype";
import { transformerNotationHighlight} from "@shikijs/transformers";

const shikiPlugin = [
    rehypeShiki,
    {
        theme: "github-dark",
        transformers: [transformerNotationHighlight()],
    },
] satisfies PluggableList[number];

export const rehypePlugin = [shikiPlugin] satisfies PluggableList;