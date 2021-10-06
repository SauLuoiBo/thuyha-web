import React from "react";
import { Button, ContactContent, Container, Heading } from "../../Components";
import mail from "../../assets/image/mail.jpeg";

const Contact = () => {
	return (
		<Container id="contact">
			<Heading Title="Contact Me" Text="Lets keep in touch" />
			<ContactContent>
				<ContactContent.Title>Get In Touch 📧</ContactContent.Title>
				<ContactContent.Frame>
					<ContactContent.Pic>
						<h2>Send Your Email Here!</h2>
						<img src={mail} alt="mail" />
					</ContactContent.Pic>
					<ContactContent.Form>
						<h5>ádsda</h5>
						<label>Name</label>
						<input type="text" />
						<label>Email</label>
						<input type="email" />
						<label>Message</label>
						<textarea type="text" />
						<Button.One>
							Sent <i className="fa fa-paper-plane"></i>
						</Button.One>
					</ContactContent.Form>
				</ContactContent.Frame>
			</ContactContent>
		</Container>
	);
};

export default Contact;
