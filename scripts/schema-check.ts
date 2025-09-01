import { AppDataSource } from '../src/typeorm/dataSource';
import { DataSource } from 'typeorm';

async function schemaCheck() {
  const source = new DataSource(AppDataSource.options);
  await source.initialize();

  const sql = await source.driver.createSchemaBuilder().log();
  await source.destroy();

  if (sql.upQueries.length > 0) {
    const difference = sql.upQueries
      .map((query) => query.query + ';')
      .join('\n');

    console.error("Schema isn't not up to date:\n" + difference);
    process.exit(1);
  } else {
    console.log('Schema is up to date');
  }
}

schemaCheck().catch((err) => {
  console.error('Failed to check schema:', err);
  process.exit(1);
});
