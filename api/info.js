export default async function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({
      error: "Number is required"
    });
  }

  try {
    const response = await fetch(
      `https://ownerjii-api-ayno.vercel.app/api/info?number=${number}`
    );

    const data = await response.json();

    res.status(200).json({
      copyright: "@KILL4R_UR",
      result: data.result || []
    });

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch data"
    });
  }
}
