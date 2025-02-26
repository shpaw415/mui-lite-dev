import Avatar from "@/mui/Avatar";
import Skeleton from "@/mui/Skeleton";

export function SkeletonTest() {
  return (
    <div className="space-y-4">
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="rounded" width="90%" height="40px" />
      <Skeleton variant="rectangular" width="90%" height="40px" />
      <Skeleton
        variant="circular"
        sx={{
          backgroundColor: {
            "bg-primary": "theme",
          },
        }}
      >
        <Avatar>JH</Avatar>
      </Skeleton>
      <Skeleton
        sx={{
          backgroundColor: {
            "bg-warning": "theme",
          },
        }}
      ></Skeleton>
    </div>
  );
}
