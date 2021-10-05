import React from 'react'
import { Wrapper, Title, Frame, Pic, Form } from './styles/contact'

const ContactContent = ({children, ...restProps}) => {
    return (
        <Wrapper {...restProps}>
            {children}
        </Wrapper>
    )
}

ContactContent.Title = function ContactContentTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

ContactContent.Frame = function ContactContentFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

ContactContent.Pic = function ContactContentPic({ children, ...restProps }) {
	return <Pic {...restProps}>{children}</Pic>;
};

ContactContent.Form = function ContactContentForm({ children, ...restProps }) {
	return <Form {...restProps}>{children}</Form>;
};


export default ContactContent
