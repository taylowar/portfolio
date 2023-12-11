import React from 'react';
import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Preview } from '@react-email/preview';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import { Heading } from '@react-email/heading';
import { Text } from '@react-email/text';
import { Hr } from '@react-email/hr';
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
                            <Text>Sender email is {email}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}


