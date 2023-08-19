import { RESULT } from '@/util/const/common/result';
import { validateHttp } from '@/util/services/validation-service';
import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    validateHttp(req, res, "POST", {
        title: {type: "string"},
        message: {type: "string"},
        to: {type: "string"},
    });

    const { title, message, to } = req.body;
    await sendEmail(title, message, to);
    res.status(200).json(RESULT.SUCCESS);
}

export const sendEmail = async (subject: string, text: string, email: string) => {

    if (process.env.APP_MODE !== 'PRODUCTION') {
        console.log('Email sent');
        return;
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const msg = {
        to: email, 
        from: "kbsub2002@gmail.com",
        subject: subject,
        html: text,
    }

    try {
        await sgMail.send(msg);
        console.log('Email sent');
    } catch (error) {
        console.error(error);
    }
}
