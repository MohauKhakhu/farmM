const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'completed':
      case 'active':
      case 'excellent':
      case 'good':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          label: status === 'completed' ? 'Completed' : 
                 status === 'active' ? 'Active' : 
                 status === 'excellent' ? 'Excellent' : 'Good'
        };
      case 'partial':
      case 'warning':
      case 'monitoring':
      case 'medium':
        return {
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          label: status === 'partial' ? 'Partial' : 
                 status === 'warning' ? 'Warning' : 
                 status === 'monitoring' ? 'Monitoring' : 'Medium'
        };
      case 'inactive':
      case 'critical':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          label: status === 'inactive' ? 'Inactive' : 'Critical'
        };
      default:
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          label: status
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor}`}>
      {config.label}
    </span>
  );
};

export default StatusBadge;