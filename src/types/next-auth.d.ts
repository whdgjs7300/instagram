import NextAuth,{DefaultSession} from "next-auth";


// 기존에 Session 타입 안에 있는 유저 그 유저 안에 원래 없던 username 키를 추가하여 타입지정 후 사용

declare module 'next-auth' {
    interface Session {
        user:{
            username : string,
        } & DefaultSession['user'];
    }
}