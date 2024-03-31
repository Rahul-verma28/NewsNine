import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function NewsItem({
  title,
  description,
  imgurl,
  newsurl,
  author,
  date,
  sourceName,
}) {
  return (
    <Card className="m-6 hover:shadow-2xl relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 duration-200">
      <CardHeader color="blue-gray" className="relative">
        <img
          src={imgurl}
          onError={(ev) => {
            ev.target.src =
              "https://images.deccanherald.com/deccanherald%2F2023-11%2F683aa75c-168e-4089-ad79-dd931f394ea6%2FPict_2037.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop";
          }}
          alt="img"
          className="h-auto w-auto"
        />
      </CardHeader>
      <CardBody className="relative">
        <button className="rounded-lg bg-green-400 px-3 py-1 text-xs text-white shadow-sm absolute top-[-10px] right-0">
          {sourceName}
        </button>
        <Typography color="blue-gray" className="mb-2 text-black text-lg font-semibold">
          {title}
        </Typography>
        <Typography className="text-md">{description}...</Typography>
        <Typography>
          <p className="card-text text-danger mt-5 text-body-secondary font-bold text-danger">
            {author},
            <span className="text-xs font-semibold">
              {" "}
              {new Date(date).toGMTString()}
            </span>
          </p>
        </Typography>
      </CardBody>
      <CardFooter>
        <Link target="_blank" rel="noreferrer" to={newsurl}>
          <Button className="bg-blue-500 hover:bg-blue-300 absolute bottom-5 ">
            Read more..
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
