import Image from 'next/image';
import Link from 'next/link';
import { CMSProductProps } from '../../types/product';

export default function ProductItem({
  productData,
}: {
  productData: CMSProductProps;
}): JSX.Element {
  console.log(productData);

  return (
    <div>
      {productData.map((product) => {
        return (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>{product.date}</p>
            {product.skill.map((skill) => {
              return <p key={skill.id}>{skill.name}</p>;
            })}
            <p>{product.skillreason}</p>
          </li>
        );
      })}
      {/* <Image src='/' alt=''></Image> */}
      {/* <p>タイトル</p>
      <p>制作期間 : </p>
      <p>使用技術 : </p>
      <p>デザイン</p>
      <ul>
        <li>Adobe XD</li>
      </ul>
      <p>フロントエンド</p>
      <ul>
        <li>Next.js</li>
      </ul>
      <p>コード管理</p>
      <ul>
        <li>Git</li>
      </ul>
      <div>1</div>
      <Link href='/'>
        <a>View More</a>
      </Link> */}
    </div>
  );
}
