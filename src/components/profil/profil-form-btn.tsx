import {useFormStatus} from "react-dom";
import {Button} from "@/components/ui/button";

export default function ProfilFormBtn() {
    const {pending, } = useFormStatus();


    return <Button
                disabled={pending}
                className={"mt-6 ml-auto block"}
                variant={"default"}>Enregistrer</Button>
}
