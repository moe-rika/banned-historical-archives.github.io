import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { ReactElement, useState, useEffect, useMemo } from 'react';
import Popover from '@mui/material/Popover';
import { ArticleCategory, ArticleType, TagType } from '../types';
import { ImageTag } from '../backend/entities';

export default function ImageTags({ tags }: { tags: ImageTag[] }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [label, setLabel] = useState('');

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        disableRestoreFocus
        sx={{
          pointerEvents: 'none',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>{label}</Typography>
      </Popover>

      {tags.map((tag) => (
        <Chip
          key={tag.id}
          onMouseEnter={(event) => {
            setLabel(tag.type);
            setAnchorEl(event.currentTarget);
          }}
          onMouseLeave={handleClose}
          sx={{ m: 0.3 }}
          label={tag.name}
        />
      ))}
    </>
  );
}
