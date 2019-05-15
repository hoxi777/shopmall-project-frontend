import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
        $user_name: String!
        $userid: String!
        $password: String!
        $re_passwored: String!
        $nickname: String! 
        $birthday: String!
        $gender: String!
        $email: String! 
        $find_email: String
        $mailing: Boolean
        $phone: Int!
        $cellPhone: Int!
        $zipCode: Int!
        $adress: String!
        $recommend: String
        $isAdmin: Boolean
    ) {
        createAccount(
        user_name : $user_name
        userid : $userid
        password : $password
        re_passwored : $re_passwored
        nickname : $nickname
        birthday : $birthday
        gender : $gender
        email : $email
        find_email : $find_email
        mailing : $mailing
        phone : $phone
        cellPhone : $cellPhone
        zipCode : $zipCode
        adress : $adress
        recommend : $recommend
        isAdmin : $isAdmin
        )
    }
`;
