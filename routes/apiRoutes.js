import express, { Router } from "express";
import axios from "axios";

const router = Router();

router.post('/top-news-headlines', async (req, res) => {
    const { category, country, Language } = req.body;
    try {
        const response = await axios.get(`https://gnews.io/api/v4/top-headlines`, {
            params: {
                category: category,
                country: country,
                lang: Language,
                apikey: process.env.GNEWS_API_KEY
            }
        });
        console.log(response);
        return res.status(200).send(response.data);
    } catch (error) {
        console.error(error);
        console.error(error.message);
        return res.status(500).send('An error occurred while fetching news');
    }
});

export default router;