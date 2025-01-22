'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

type CloudinaryResource = {
    asset_id: string;
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
    // add other fields if needed
};

export default function GalleryPage() {
    const [images, setImages] = useState<CloudinaryResource[]>([]);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Intersection Observer ref (to trigger fetching more images as we scroll)
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    const fetchImages = useCallback(
        async (cursor: string | null = null) => {
            try {
                setIsLoading(true);

                // Build the query params
                const params = {
                    maxResults: 9, // number of images to fetch at once
                };
                if (cursor) {
                    (params as any).nextCursor = cursor;
                }

                const res = await axios.get('/api/cloudinary-images', { params });
                const { resources, nextCursor: newNextCursor } = res.data;

                setImages((prev) => [...prev, ...resources]);
                setNextCursor(newNextCursor);
            } catch (error) {
                console.error('Failed to fetch images from Cloudinary:', error);
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    // Initial fetch
    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    // Setup Intersection Observer to load more images when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];
                if (target.isIntersecting && !isLoading && nextCursor) {
                    fetchImages(nextCursor);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [fetchImages, nextCursor, isLoading]);

    return (
        <div className="w-full min-h-screen p-4 bg-gray-100 mt-20">
            <h1
                className="w-fit mx-auto mb-6 text-center text-4xl font-bold font-[cursive] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md border-2 border-green-400 px-4 py-2 rounded-lg"
                style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)' }}
            >
                Image Gallery
            </h1>


            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                <AnimatePresence>
                    {images.map((img) => (
                        <motion.div
                            key={img.asset_id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mb-4 break-inside-avoid"
                        >
                            <div className="overflow-hidden rounded-lg shadow-sm bg-white">
                                {/* 
                  For best optimization, you could use Next.js <Image /> component,
                  but for simplicity, we use <img> with the secure_url from Cloudinary.
                */}
                                <img
                                    src={img.secure_url}
                                    alt={img.public_id}
                                    loading="lazy"
                                    className="w-full h-auto object-cover rounded-md"
                                />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Loader or Trigger element */}
            {isLoading && (
                <div className="text-center my-4 text-gray-600">Loading...</div>
            )}

            {/* This empty div is observed by IntersectionObserver to load next batch */}
            <div ref={loadMoreRef} className="h-10 w-full"></div>
        </div>
    );
}
