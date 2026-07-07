import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

interface CarouselProps {
  images: string[];
  alt: string;
}

export default function Carousel({ images, alt }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <div className='w-full'>
      {/* Main Image */}

      <div className='relative overflow-hidden rounded-2xl group'>
        <div
          ref={emblaRef}
          className='overflow-hidden '
        >
          <div className='flex'>
            {images.map((image, index) => (
              <div
                key={index}
                className='min-w-0 shrink-0 grow-0 basis-full'
              >
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={image}
                    src={image}
                    alt={`${alt} ${index + 1}`}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className=' w-full aspect-4/3 md:aspect-16/14 object-cover rounded-2xl'
                  />
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Previous */}

        <button
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            scrollPrev();
          }}
          className='absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-black/60 backdrop-blur-md text-white grid place-items-center opacity-0 transition group-hover:opacity-100 sm:left-4 sm:size-10'
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} />
        </button>

        {/* Next */}

        <button
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            scrollNext();
          }}
          className='absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-black/60 backdrop-blur-md text-white grid place-items-center opacity-0 transition group-hover:opacity-100 sm:right-4 sm:size-10'
        >
          <HugeiconsIcon icon={ArrowRight01Icon} />
        </button>
      </div>

      {/* Thumbnails */}

      <div className='mt-3 flex gap-2 overflow-x-auto pb-1 sm:mt-4 sm:gap-3'>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              scrollTo(index);
            }}
            className={`relative overflow-hidden rounded-xl border-2 transition-all ${
              index === selectedIndex
                ? 'border-primary'
                : 'border-transparent hover:border-outline'
            }`}
          >
            <img
              src={image}
              alt=''
              className='h-14 w-20 object-cover sm:h-18 sm:w-28'
            />

            {index !== selectedIndex && (
              <div className='absolute inset-0 bg-black/30 hover:bg-black/10 transition' />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
