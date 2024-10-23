'use client'

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "./button";
import { ArrowLeftCircleIcon, ArrowRightEndOnRectangleIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
export default function CalMeeting() {
    useEffect(() => {
        (
            async function () {
                const cal = await getCalApi({ "namespace": "15min" });
                cal("ui", {
                    "styles":
                    {
                        "branding": { "brandColor": "#000000" }
                    },

                    "hideEventTypeDetails": false, "layout": "month_view"
                });
            })();
    }, [])
    return (
        <div className="flex flex-wrap gap-2 items-center mt-12">
            <h4 className="lg:text-xl text-lg font-semibold">Schedule a Meeting 👋</h4>
            <p
                data-cal-namespace="15min"
                data-cal-link="famesway-bqone4/15min"
                data-cal-config='{"layout":"month_view"}'
                className={'cursor-pointer font-semibold underline text-gray-600'}
            >Book a Meeting</p>
        </div>
    )
};
