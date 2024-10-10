import React from 'react';

const Page: React.FC = () => {
  return (
    <div>
      <header>
        <h1>News Portal</h1>
      </header>
      <main>
        <section>
          <h2>Latest News</h2>
          {/* Add news articles here */}
        </section>
      </main>
      <footer>
        <p>&copy; 2023 News Portal</p>
      </footer>
    </div>
  );
};

export default Page;