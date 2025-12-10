const cleanSearchParams = async (params: Record<string, any>) => {
  const resolveParams = await params;
  return Object.fromEntries(
    Object.entries(resolveParams).filter(
      ([, value]) => value !== undefined && value !== null,
    ),
  ) as Record<string, string>;
};

export default cleanSearchParams;
