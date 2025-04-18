
import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { MoodChartData } from './types/mood';

interface MoodHistoryProps {
  data: MoodChartData[];
}

const MoodHistory: React.FC<MoodHistoryProps> = ({ data }) => {
  const { isRTL } = useLanguage();
  
  const config = {
    happy: {
      color: '#22c55e',
      label: isRTL ? 'سعيد' : 'Happy'
    },
    neutral: {
      color: '#f59e0b',
      label: isRTL ? 'محايد' : 'Neutral'
    },
    sad: {
      color: '#3b82f6',
      label: isRTL ? 'حزين' : 'Sad'
    }
  };

  return (
    <Card className="p-4 border-salamtak-sand h-[300px]">
      <h4 className="text-lg font-medium text-salamtak-brown mb-4">
        {isRTL ? 'سجل المزاج' : 'Mood History'}
      </h4>
      <ChartContainer config={config} className="w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <XAxis 
              dataKey="date"
              tickMargin={8}
              tickFormatter={(value) => value}
              reversed={isRTL}
            />
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              type="monotone"
              dataKey="happy"
              stroke={config.happy.color}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="neutral"
              stroke={config.neutral.color}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="sad"
              stroke={config.sad.color}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};

export default MoodHistory;
