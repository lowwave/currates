export type LastUpdatedT = {
  lastUpdatedDate: string;
  issue: number;
};

const regex = /(\d{2}\.\d{2}\.\d{4}) #(\d+)/;

// parses the first line of the data string and returns an object with the date and issue number
// date string format: 01.01.2021 #1
export const getLastUpdatedDate = (data: string): LastUpdatedT | null => {
  if (!data) {
    return null;
  }

  const lines = data.split('\n');
  const dateString = lines[0];

  const match = dateString.match(regex);
  if (!match) {
    return null;
  }

  const [, date, issue] = match;

  return {
    lastUpdatedDate: date,
    issue: Number(issue),
  };
};
