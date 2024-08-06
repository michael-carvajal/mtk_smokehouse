import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Hash the password
  const hashedPassword = await bcrypt.hash('password', 10);

  // Create two admin users
  const user1 = await prisma.user.create({
    data: {
      name: 'Admin One',
      email: 'admin1@example.com',
      password: hashedPassword,
      role: 'admin',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Admin Two',
      email: 'admin2@example.com',
      password: hashedPassword,
      role: 'admin',
    },
  });

  // Create blog posts for each user
  const blogPost1 = await prisma.blogPost.create({
    data: {
      title: 'First Blog Post',
      content: 'Content of the first blog post',
      author: { connect: { id: user1.id } },
    },
  });

  const blogPost2 = await prisma.blogPost.create({
    data: {
      title: 'Second Blog Post',
      content: 'Content of the second blog post',
      author: { connect: { id: user2.id } },
    },
  });

  // Create products for each user
  const product1 = await prisma.product.create({
    data: {
      name: 'Smoked Salmon',
      description: 'Delicious smoked salmon',
      price: 29.99,
      countryCode: 1,
      createdBy: { connect: { id: user1.id } },
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Smoked Trout',
      description: 'Delicious smoked trout',
      price: 24.99,
      countryCode: 1,
      createdBy: { connect: { id: user1.id } },
    },
  });

  const product3 = await prisma.product.create({
    data: {
      name: 'Smoked Mackerel',
      description: 'Delicious smoked mackerel',
      price: 19.99,
      countryCode: 1,
      createdBy: { connect: { id: user2.id } },
    },
  });

  const product4 = await prisma.product.create({
    data: {
      name: 'Smoked Eel',
      description: 'Delicious smoked eel',
      price: 34.99,
      countryCode: 1,
      createdBy: { connect: { id: user2.id } },
    },
  });

  console.log({ user1, user2, blogPost1, blogPost2, product1, product2, product3, product4 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
