// components/About.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = () => {
    return (
        <Box p={2} color={'aliceblue'}>
            <Typography variant="h4" gutterBottom>About Zonito.in</Typography>
            <Typography variant="body1" paragraph>
                Zonito.in is your go-to destination for customizable clothing shopping. We believe that fashion is a form of self-expression, and everyone deserves to wear clothing that reflects their unique style and personality.
            </Typography>
            <Typography variant="body1" paragraph>
                At Zonito.in, we're passionate about providing you with the tools and options to create clothing that's truly yours. From choosing the perfect color and fabric to adding personalized design elements, our platform allows you to unleash your creativity and design clothing that speaks volumes about who you are.
            </Typography>
            <Typography variant="body1" paragraph>
                With a diverse range of clothing items, including t-shirts, hoodies, sweatshirts, and more, we're committed to offering you endless possibilities for customization. Whether you're looking for everyday basics or statement pieces that turn heads, Zonito.in has you covered.
            </Typography>
            <Typography variant="body1" paragraph>
                Our mission is simple: to empower individuals to express themselves through fashion and make personalized clothing accessible to all. We're dedicated to providing you with a seamless shopping experience, personalized recommendations, and exceptional customer service every step of the way.
            </Typography>
            <Typography variant="body1">
                Thank you for choosing Zonito.in for your customizable clothing needs. We're excited to be part of your style journey and can't wait to see the unique creations you design!
            </Typography>
        </Box>
    );
}

export default About;
