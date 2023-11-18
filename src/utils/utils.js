export const handleSectionNavigation = (id) => {
  const element = document.getElementById(id);
  const offset = 45;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element?.getBoundingClientRect().top ?? 0;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

export const CampaignStatus = (status) => {
  switch (status) {
    case "exhausted":
      return { color: "deep_orange_50", campaign_status: "Exhausted" };

    case "paused":
      return { color: "orange_50", campaign_status: "Paused" };

    case "live_now":
    default:
      return { color: "green_50", campaign_status: "Live now" };
  }
};

export const PlatformType = ({ platform }) => {
  switch (platform) {
    case "facebook":
      return "Facebook";

    case "youtube":
      return "Youtube";

    case "instagram":
      return "Instagram";

    case "google":
    default:
      return "Google";
  }
};
