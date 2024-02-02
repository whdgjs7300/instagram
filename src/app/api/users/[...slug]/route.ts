import { NextRequest, NextResponse } from "next/server";

type Context = {
    params : {
        slug : string[]; // slug/slug/slug 배열
    }
}

export async function GET(_:NextRequest, context : Context) {
    const {slug} = context.params;

    if(!slug || !Array.isArray(slug) || slug.length < 2) {
        return new NextResponse('Bad Request', { status : 400});

        const [username, query] = slug;
    }
}