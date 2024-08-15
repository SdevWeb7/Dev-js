import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';


type CodeCourseProps = {
    langage: string;
    children: string | string[];
};
export default function CodeCourse({children, langage} : CodeCourseProps) {

    return <SyntaxHighlighter language={langage} style={solarizedlight}>
        {children}
    </SyntaxHighlighter>
}
