export type LastUpdatedT = {
  lastUpdatedDate: string;
  order: number;
};

const regex = /(\d{2} \w{3} \d{4}) #(\d+)/;

// parses the first line of the data string and returns an object with the date and issue number
// data string format: 01 Jan 2021 #123
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
    order: Number(issue),
  };
};
