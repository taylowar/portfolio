import React from "react";
import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section, 
    Heading,
    Text,
    Hr,
} from "@react-email/components";
import { Tailwind } from '@react-email/tailwind';

type Props = {
    email: string;
    message: string;
};

export default function ContactEmail({ email, message }: Props) {
    return (
        <Html>
            <Head />
            <Preview>New message form portfolio website</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section 
                            className="
                            bg-white
                            my-border-black
                            my-10
                            px-10
                            py-10
                            rounded-lg"
                        >
                            <Heading className="leading-tight">
                                You recieved a new message 
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender's email is {email}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}


