import { Card, Image, Text, Group } from '@mantine/core';
import { urlForBlogs } from '../../../../lib/sanity';

interface ArticleCardProps {
  mainContent: {
    coverImage: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    title: string;
    shortInfo: string;
    blogtype: "latest_article" | "news_media";
    publishDate: string;
  };
}

const ArticleCard = ({ mainContent }: ArticleCardProps) => {
  const { title, shortInfo, coverImage } = mainContent;
  const blogUrl = `/blogs/${title.trim().replace(/\s+/g, "-")}`;
  
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Card.Section component="a" href={blogUrl}>
        <Image
          src={coverImage ? urlForBlogs(coverImage)?.url() : "/assets/blogs.png"}
          height={160}
          alt={title}
        />
      </Card.Section>
      
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} lineClamp={2}>
          {title}
        </Text>
      </Group>
      
      <Text size="sm" c="dimmed" lineClamp={3} style={{ flex: 1 }}>
        {shortInfo}
      </Text>
    </Card>
  );
};

export default ArticleCard;

