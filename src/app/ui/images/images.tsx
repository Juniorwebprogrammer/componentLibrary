import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ImageInterface from '../../interface/ImageInterface';
import { CircularProgress } from '@mui/material';

const ImageLoader: React.FC<ImageInterface> = ({
    src,
    alt,
    width,
    height,
    quality,
    priority,
    loading,
    loadingState,
    sizeLoading,
}) => {
    const [isLoading, setIsLoading] = useState(loadingState);

    const handleLoad = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(loadingState);
    }, [loadingState]);

    return (
        <div style={{ position: 'relative', width, height }}>
            {isLoading && (
                <div className="loading-container">
                    <CircularProgress size={sizeLoading} />
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                quality={quality}
                priority={priority}
                loading={loading}
                onLoad={handleLoad}
                style={{ display: isLoading ? 'none' : 'block' }}
            />
        </div>
    );
};

export default ImageLoader;
