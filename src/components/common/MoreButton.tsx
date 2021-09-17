import Link from 'next/link';

export default function MoreButton({ link }: { link: string }) {
  return (
    <>
      <Link href={link}>
        <a>View More</a>
      </Link>
    </>
  );
}
