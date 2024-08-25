import H1Course from "@/components/cours/h1-course";
import H2Course from "@/components/cours/h2-course";
import PCourse from "@/components/cours/p-course";
import UlCourse from "@/components/cours/ul-course";
import LICourse from "@/components/cours/li-course";
import Link from "next/link";
import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import LinkCustom from "@/components/cours/link-custom";

export default function page() {
  return (
    <LayoutCourseCustom>
      <H1Course>Ressources utiles</H1Course>

        <H1Course>Ressources utiles</H1Course>


        <H2Course>Documentation officielle</H2Course>
        <PCourse>Vous y trouverez des tutoriels et des vidéos expliquant comment utiliser VS Code.</PCourse>


        <UlCourse>
            <LICourse>
                <LinkCustom href="https://code.visualstudio.com/docs">Documentation officielle</LinkCustom>
            </LICourse>
            <LICourse>
                <LinkCustom href="www.youtube.com/@code">Chaîne Youtube officielle</LinkCustom>
            </LICourse>
        </UlCourse>

      <H2Course>Documentation officielle</H2Course>
      <PCourse>
        Vous y trouverez des tutoriels et des vidéos expliquant comment utiliser
        VS Code.
      </PCourse>


      <UlCourse>
        <LICourse>
          <LinkCustom href="https://code.visualstudio.com/docs">
            Documentation officielle
          </LinkCustom>
          utiliser VS Code.
        </LICourse>
        <LICourse>
          <LinkCustom href="https://www.youtube.com/@code">
            Chaîne Youtube officielle
          </LinkCustom>
        </LICourse>
      </UlCourse>
    </LayoutCourseCustom>
  );
}
