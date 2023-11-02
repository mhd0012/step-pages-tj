'use client'
import MultiStep from "@/components/MultiStep";
import PageOne from "@/components/form/steps/PageOne";
import PageTow from "@/components/form/steps/PageTow";
import PageThree from "@/components/form/steps/PageThree";

export default function Form() {
    return (
        // @ts-ignore
        <MultiStep pages={[
            PageOne,
            PageTow,
            PageThree,
        ]} />
    )
}