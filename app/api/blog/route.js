import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from 'fs/promises';

const { NextResponse } = require("next/server");

const LoadDB = async () => {
    try {
        await ConnectDB();
    } catch (e) {
        console.error(e.message);
    }
}

LoadDB();

// http://localhost:3000/api/blog

export async function GET(request) {
    console.log("Blog GET Hit");
    return NextResponse.json({message: "API Working!!"})
}

export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    console.log("1차");
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;

    // fs.promises.writeFile을 사용하여 비동기적으로 파일을 저장
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    
    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get('authorImg')}`,
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");
    return NextResponse.json({ success: true, msg: "Blog Added" });
}

export async function PUT(request) {
    
}

export async function DELETE(request) {
    
}